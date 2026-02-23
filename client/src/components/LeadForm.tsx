import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";

export function LeadForm() {
  const mutation = useCreateLead();
  
  const form = useForm<z.infer<typeof insertLeadSchema>>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      origin: "",
      financingPlan: "",
    },
  });

  function onSubmit(values: z.infer<typeof insertLeadSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5">
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">
          Jadwalkan Survey & Diskusi
        </h3>
        <p className="text-muted-foreground">
          Isi form di bawah ini untuk terhubung langsung dengan pemilik via WhatsApp.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Bpk/Ibu..." 
                    className="h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-accent transition-all" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Asal Daerah / Kota</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Contoh: Jakarta Selatan" 
                    className="h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-accent transition-all" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="financingPlan"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Rencana Pembiayaan</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-accent transition-all">
                      <SelectValue placeholder="Pilih skema pembiayaan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Cash Keras">Cash Keras</SelectItem>
                    <SelectItem value="Cash Bertahap">Cash Bertahap</SelectItem>
                    <SelectItem value="KPR">KPR / Pembiayaan Bank</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Memproses...
              </>
            ) : (
              <>
                Lanjut ke WhatsApp
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            Data Anda aman dan langsung diterima oleh perwakilan pemilik.
          </p>
        </form>
      </Form>
    </div>
  );
}
