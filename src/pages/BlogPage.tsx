import { Calendar, ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const BlogPage = () => {
  const blogPosts = [{
    title: "How AI Chatbots Are Revolutionizing Customer Service",
    excerpt: "Discover how modern AI chatbots are transforming customer support by providing instant, personalized responses 24/7, leading to higher satisfaction rates and reduced operational costs.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
    category: "AI Innovation",
    slug: "ai-chatbots-revolutionizing-customer-service"
  }, {
    title: "The Future of Voice AI in Business",
    excerpt: "Explore the cutting-edge developments in voice AI technology and how businesses are leveraging conversational interfaces to create more natural customer interactions.",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop",
    category: "Voice Technology",
    slug: "future-of-voice-ai-in-business"
  }, {
    title: "ROI of Intelligent Automation: Real Case Studies",
    excerpt: "Detailed analysis of how companies achieved 300% ROI through intelligent automation, including real-world examples, implementation strategies, and measurable outcomes.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    category: "Business Impact",
    slug: "roi-of-intelligent-automation"
  }, {
    title: "Building Ethical AI: A Framework for Responsible Development",
    excerpt: "Learn about the essential principles and practices for developing AI systems that are fair, transparent, and beneficial for society.",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    category: "AI Ethics",
    slug: "building-ethical-ai-framework"
  }, {
    title: "The Rise of Conversational AI in E-commerce",
    excerpt: "How online retailers are using conversational AI to enhance customer experience, boost sales, and streamline operations.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    category: "E-commerce",
    slug: "conversational-ai-ecommerce"
  }, {
    title: "Machine Learning vs Deep Learning: What's the Difference?",
    excerpt: "A comprehensive guide to understanding the key differences between machine learning and deep learning, with practical applications.",
    date: "Dec 1, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    category: "Technology",
    slug: "machine-learning-vs-deep-learning"
  }];
  return <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <div className="bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-foreground-muted hover:text-foreground transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Insights
              </span>{" "}
              <span className="text-foreground">& Articles</span>
            </h1>
            
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights, trends, and expert analysis in artificial intelligence and business transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => <article key={post.title} className="group bg-gradient-card backdrop-blur-sm rounded-xl border border-border-subtle overflow-hidden hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium border border-primary/30 text-indigo-50">
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

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link to={`/article/${post.slug}`}>
                    <Button variant="glass" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50">
                      Read Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </article>)}
          </div>
        </div>
      </section>
    </div>;
};
export default BlogPage;
