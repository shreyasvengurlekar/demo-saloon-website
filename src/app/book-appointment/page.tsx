
import { AppointmentForm } from '@/components/forms/appointment-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BookAppointmentPage() {
  return (
    <>
      <div className="container mx-auto px-6 md:px-8 pt-16 pb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Book an Appointment
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Choose your preferred date, time, and service to schedule your visit.
        </p>
      </div>
      <section className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="p-6 md:p-8">
              <AppointmentForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
