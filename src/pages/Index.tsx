import ThreeBackground from '@/components/ThreeBackground';
import ProfessionalForm from '@/components/ProfessionalForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ThreeBackground />
      
      {/* Gradient overlays - reduced opacity to show 3D animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/20 to-transparent pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <ProfessionalForm />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{animationDelay: '0s'}} />
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-50" style={{animationDelay: '4s'}} />
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-30" style={{animationDelay: '1s'}} />
    </div>
  );
};

export default Index;
