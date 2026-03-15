
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppointmentForm } from '@/components/forms/appointment-form';

export default function BookAppointmentPage() {
  return (
    <>
      <PageHeader
        title="Book Your Appointment"
        subtitle="Fill out the form below to request an appointment. We'll contact you to confirm the date and time."
      />
      <section className="container px-6 md:px-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Request</CardTitle>
              <CardDescription>
                Please provide your details and we will get in touch to finalize your booking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
