import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Building, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  country: string;
  message: string;
}

const ProfessionalForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // La fonction handleSubmit est maintenant asynchrone pour gérer l'appel réseau
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const N8N_WEBHOOK_URL = "https://chouaibguira.app.n8n.cloud/webhook/contact-form";

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setIsSubmitted(true); // Affiche l'écran de remerciement
            toast({
                title: "Message envoyé avec succès!",
                description: "Nous vous recontacterons dans les plus brefs délais.",
            });
        } else {
            // Gère les erreurs si n8n ou le réseau répondent avec un code d'erreur
            throw new Error("La soumission du formulaire a échoué.");
        }
    } catch (error) {
        console.error("Erreur lors de la soumission:", error);
        toast({
            title: "Erreur",
            description: "Un problème est survenu. Veuillez réessayer plus tard.",
            variant: "destructive",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto animate-scale-in">
        <div className="bg-gradient-surface backdrop-blur-md rounded-2xl p-8 shadow-form border border-border hover-lift">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Merci !</h2>
            <p className="text-muted-foreground">
              Votre message a été envoyé avec succès. Nous vous recontacterons très prochainement.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="bg-gradient-surface backdrop-blur-md rounded-2xl p-8 shadow-form border border-border hover-lift">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
            Contactez-nous
          </h1>
          <p className="text-muted-foreground animate-slide-up" style={{animationDelay: '0.1s'}}>
            Discutons de votre projet ensemble
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Les champs du formulaire restent inchangés */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                Prénom
              </Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => setFocusedField('')}
                  className={`pl-10 bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                    focusedField === 'firstName' ? 'shadow-glow' : ''
                  }`}
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                Nom
              </Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  onFocus={() => setFocusedField('lastName')}
                  onBlur={() => setFocusedField('')}
                  className={`pl-10 bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                    focusedField === 'lastName' ? 'shadow-glow' : ''
                  }`}
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email professionnel
            </Label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className={`pl-10 bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                  focusedField === 'email' ? 'shadow-glow' : ''
                }`}
                placeholder="votre.email@entreprise.com"
                required
              />
            </div>
          </div>

          {/* ... autres champs inchangés ... */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Téléphone
            </Label>
            <div className="relative group">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
                className={`pl-10 bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                  focusedField === 'phone' ? 'shadow-glow' : ''
                }`}
                placeholder="+33 1 23 45 67 89"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-foreground">
                Entreprise
              </Label>
              <div className="relative group">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField('')}
                  className={`pl-10 bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                    focusedField === 'company' ? 'shadow-glow' : ''
                  }`}
                  placeholder="Nom de l'entreprise"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position" className="text-sm font-medium text-foreground">
                Poste
              </Label>
              <Input
                id="position"
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                onFocus={() => setFocusedField('position')}
                onBlur={() => setFocusedField('')}
                className={`bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                  focusedField === 'position' ? 'shadow-glow' : ''
                }`}
                placeholder="Votre fonction"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm font-medium text-foreground">
              Pays
            </Label>
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                id="country"
                type="text"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                onFocus={() => setFocusedField('country')}
                onBlur={() => setFocusedField('')}
                className={`pl-10 bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                  focusedField === 'country' ? 'shadow-glow' : ''
                }`}
                placeholder="France"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </Label>
            <div className="relative group">
              <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                className={`pl-10 min-h-[120px] bg-card/50 border-border focus:border-primary input-hover transition-all duration-300 ${
                  focusedField === 'message' ? 'shadow-glow' : ''
                }`}
                placeholder="Décrivez-nous votre projet ou vos besoins..."
                required
              />
            </div>
          </div>

          {/* Le bouton est maintenant désactivé pendant l'envoi */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover-glow group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            )}
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Vos données sont protégées et ne seront jamais partagées avec des tiers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalForm;

