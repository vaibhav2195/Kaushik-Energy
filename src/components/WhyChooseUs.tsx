import { CheckCircle2 } from 'lucide-react';

const features = [
  "Certified Professionals",
  "Premium Equipment",
  "24/7 Support",
  "Customized Solutions",
  "Warranty Coverage"
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Kaushik Energy?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}