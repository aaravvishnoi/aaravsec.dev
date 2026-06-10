import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();
  usePageMeta({ title: "404 — Not found", description: "This page could not be found." });

  useEffect(() => {
    console.error("404: route not found —", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm text-primary">HTTP 404</p>
        <h1 className="mt-4 font-display text-6xl font-bold">Not found</h1>
        <p className="mt-4 font-mono text-sm text-dim">
          <span className="text-muted-foreground">{location.pathname}</span> didn&apos;t resolve.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
        >
          Return home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
