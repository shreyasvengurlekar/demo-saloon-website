'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { SERVICES, STYLISTS } from '@/lib/constants';
import { Send } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';

const allServices = Object.values(SERVICES).flat();
const timeSlots = ['10:00', '11:00', '13:00', '14:00', '15:00', '17:00', '18:00', '20:00'];

const formSchema = z.object({
  service: z.string({ required_error: 'Please select a service.' }),
  stylist: z.string({ required_error: 'Please select a stylist.' }),
  date: z.date({ required_error: 'A date for your appointment is required.' }),
  time: z.string({ required_error: 'A time for your appointment is required.' }),
});

export function AppointmentForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Appointment Request Sent!',
      description: 'We have received your request and will call you shortly to confirm.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel className="text-lg font-semibold mb-4">Select a Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                    className="rounded-md border"
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />

          <div className="space-y-8">
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Available Slots</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      className="grid grid-cols-3 gap-2 pt-2"
                      value={field.value}
                      onValueChange={(value) => {
                        if (value) field.onChange(value);
                      }}
                    >
                      {timeSlots.map((slot) => (
                        <ToggleGroupItem
                          key={slot}
                          value={slot}
                          aria-label={`Select ${slot}`}
                          className="h-auto p-3 border-2 text-base"
                        >
                          {slot}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage className="pt-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Choose Service</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allServices.map((service) => (
                        <SelectItem key={service.name} value={service.name}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stylist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Choose Stylist</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select a stylist" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {STYLISTS.map((stylist) => (
                        <SelectItem key={stylist.name} value={stylist.name}>
                          {stylist.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full text-lg mt-8">
          Book Appointment <Send className="ml-2" />
        </Button>
      </form>
    </Form>
  );
}
