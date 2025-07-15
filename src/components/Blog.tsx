import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI Chatbots Are Revolutionizing Customer Service",
      excerpt: "Discover how modern AI chatbots are transforming customer support by providing instant, personalized responses 24/7, leading to higher satisfaction rates and reduced operational costs.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
      category: "AI Innovation"
    },
    {
      title: "The Future of Voice AI in Business",
      excerpt: "Explore the cutting-edge developments in voice AI technology and how businesses are leveraging conversational interfaces to create more natural customer interactions.",
      date: "Dec 12, 2024", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop",
      category: "Voice Technology"
    },
    {
      title: "ROI of Intelligent Automation: Real Case Studies",
      excerpt: "Detailed analysis of how companies achieved 300% ROI through intelligent automation, including real-world examples, implementation strategies, and measurable outcomes.",
      date: "Dec 10, 2024",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Business Impact"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Stay updated with the latest AI trends and insights from our experts
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-gradient-card backdrop-blur-sm rounded-xl border border-border-subtle overflow-hidden hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-fade-in-up"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/30">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-foreground-muted mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-foreground-muted mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <Button variant="glass" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50">
                  Read More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View all posts CTA */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Button variant="premium" size="xl" onClick={() => window.location.href = '/blog'}>
            View All Articles
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;