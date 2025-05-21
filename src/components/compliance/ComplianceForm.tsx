// "use client";

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import type { z } from 'zod';
// import { complianceVerifier } from '@/ai/flows/compliance-verifier';
// import { ComplianceVerifierInputSchema, type ComplianceVerifierOutput } from '@/types';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// // Label component is not directly used, FormLabel is used instead.
// // import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { Loader2, CheckCircle2, XCircle, FileWarning } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// // Placeholder URL for the official registry, can be overridden by user
// const DEFAULT_REGISTRY_URL = 'https://rkn.gov.ru/communication/register/organizators/'; // Example, replace with actual

// export function ComplianceForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState<ComplianceVerifierOutput | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof ComplianceVerifierInputSchema>>({
//     resolver: zodResolver(ComplianceVerifierInputSchema),
//     defaultValues: {
//       hostingProviderName: '',
//       officialRegistryLink: DEFAULT_REGISTRY_URL,
//     },
//   });

//   async function onSubmit(values: z.infer<typeof ComplianceVerifierInputSchema>) {
//     setIsLoading(true);
//     setResult(null);
//     setError(null);

//     try {
//       // const aiResult = await complianceVerifier(values);
//       // setResult(aiResult);
//       // toast({
//       //   title: "Проверка завершена",
//       //   description: `Статус соответствия для ${values.hostingProviderName} определен.`,
//       //   variant: aiResult.isCompliant ? "default" : "destructive",
//       // });
//       console.log('Compliance verifier functionality is commented out.');
//       toast({
//         title: "Функционал временно недоступен",
//         description: "Проверка соответствия была удалена.",
//         variant: "destructive",
//       });
//     } catch (e) {
//       const errorMessage = e instanceof Error ? e.message : "Произошла неизвестная ошибка.";
//       setError(errorMessage);
//       toast({
//         title: "Ошибка проверки",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto shadow-xl">
//       <CardHeader>
//         <CardTitle className="text-2xl">Проверить соответствие хостинг-провайдера</CardTitle>
//         <CardDescription>
//           Этот функционал был удален.
//         </CardDescription>
//       </CardHeader>
//       {/* <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <CardContent className="space-y-6">
//             <FormField
//               control={form.control}
//               name="hostingProviderName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="hostingProviderName">Название хостинг-провайдера</FormLabel>
//                   <FormControl>
//                     <Input id="hostingProviderName" placeholder="например, Мой Замечательный Хостинг" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="officialRegistryLink"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="officialRegistryLink">Ссылка на официальный реестр</FormLabel>
//                   <FormControl>
//                     <Input id="officialRegistryLink" type="url" placeholder="https://example.com/reestr" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" disabled={isLoading} className="w-full">
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Проверка...
//                 </>
//               ) : (
//                 'Проверить соответствие'
//               )}
//             </Button>
//           </CardFooter>
//         </form>
//       </Form>

//       {error && (
//         <div className="p-6 pt-0">
//           <Alert variant="destructive">
//             <FileWarning className="h-4 w-4" />
//             <AlertTitle>Ошибка</AlertTitle>
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         </div>
//       )}

//       {result && (
//         <div className="p-6 pt-0">
//           <Alert variant={result.isCompliant ? 'default' : 'destructive'} className={result.isCompliant ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}>
//             {result.isCompliant ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-600" />}
//             <AlertTitle className={result.isCompliant ? 'text-green-700' : 'text-red-700'}>
//               {result.isCompliant ? 'Соответствует' : 'Не соответствует (или не найден)'}
//             </AlertTitle>
//             <AlertDescription className={result.isCompliant ? 'text-green-600' : 'text-red-600'}>
//               <strong>Причина:</strong> {result.reason}
//             </AlertDescription>
//           </Alert>
//         </div>
//       )} */}
//     </Card>
//   );
// }

// Чтобы избежать ошибок импорта в других местах, если этот компонент все еще где-то импортируется:
export function ComplianceForm() {
  return <div>Функционал проверки соответствия был удален.</div>;
}
