import { FC } from "react";
import { Container, Footer, Header } from "@/components/shared";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <Container className="flex min-h-full flex-col">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};
