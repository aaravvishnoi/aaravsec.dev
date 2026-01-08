import Layout from "@/components/Layout";
import { Construction } from "lucide-react";

const Portfolio = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="mb-6 rounded-full bg-primary/10 p-6">
            <Construction className="h-16 w-16 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Portfolio</h1>
          <p className="mb-2 text-xl text-muted-foreground">Coming Soon</p>
          <p className="max-w-md text-muted-foreground">
            Major red team projects and comprehensive security assessments are currently being documented. Check back soon for detailed case studies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
