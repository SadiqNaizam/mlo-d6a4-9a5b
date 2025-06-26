import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import TextLinks from './TextLinks';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
  remember: z.boolean().default(false).optional(),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    setIsLoading(true);
    console.log("Form Submitted:", values);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate API call
  };

  return (
    <div className="w-full bg-card p-8 rounded-lg shadow-sm">
      <div className="text-left mb-6">
        <p className="text-sm text-muted-foreground">Please enter your details</p>
        <h1 className="text-3xl font-bold mt-1 text-foreground">Welcome back</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email adress" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="remember"
                    />
                  </FormControl>
                  <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground cursor-pointer">
                    Remember for 30 days
                  </Label>
                </FormItem>
              )}
            />
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              Forgot password
            </a>
          </div>

          <div className="space-y-3 pt-2">
            <PrimaryButton type="submit" isLoading={isLoading}>
              Sign up
            </PrimaryButton>
            
            <SecondaryButton type="button">
              Sign in with Google
            </SecondaryButton>
          </div>
        </form>
      </Form>
      
      <TextLinks className="mt-6 text-center" />
    </div>
  );
};

export default LoginForm;
