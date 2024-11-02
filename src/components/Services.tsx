import { Battery, BarChart3, Leaf } from 'lucide-react';

const services = [
  {
    icon: Battery,
    title: "Solar Installation",
    description: "Professional installation of high-efficiency solar panels for residential and commercial properties."
  },
  {
    icon: BarChart3,
    title: "Energy Monitoring",
    description: "Advanced monitoring systems to track and optimize your solar energy production."
  },
  {
    icon: Leaf,
    title: "Maintenance",
    description: "Regular maintenance and support to ensure optimal performance of your solar system."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <service.icon className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}