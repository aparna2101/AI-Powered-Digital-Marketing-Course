const tools = [
  "Google Ads", "Google Analytics", "Meta Ads", "SEMrush", "ChatGPT",
  "Canva", "Ahrefs", "Google Tag Manager", "HubSpot", "Mailchimp",
  "WordPress", "Shopify", "Hootsuite", "Google Search Console", "Moz",
];

const ToolsSection = () => {
  return (
    <section className="bg-light-gray py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-8">
          Tools & Technologies You'll Master
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-card text-foreground border border-border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:border-primary transition-all"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
