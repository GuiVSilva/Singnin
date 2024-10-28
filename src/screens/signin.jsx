import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import driverImg from "../assets/driver.svg";
import rentalImg from "../assets/rental.svg";

export function SignIn() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
        <Carousel className='w-full max-w-xl'>
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={rentalImg} />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={driverImg} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre em sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha ou o GitHub para entrar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input placeholder="exemplo@email.com" type="email" />
            </div>
            <div className="mt-3">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="senha" type="password" />
            </div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="flex items-center gap-2 mt-4">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator className="flex-1" />
            </div>
            <Button variant="outline" className="mt-4 w-full">
              <GitHubLogoIcon /> Entrar com GitHub
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text=muted-foreground text-center text-sm">
              Ao entrar em nossa plataforma voce concarda com nossos Termos de
              Uso e Politica de Privacidade
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
