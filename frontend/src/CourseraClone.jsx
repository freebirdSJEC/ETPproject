import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, Star, Clock, Users, Award, BookOpen, Play, Globe, TrendingUp } from 'lucide-react';

const CourseraClone = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      instructor: "Andrew Ng",
      university: "Stanford University",
      rating: 4.9,
      reviews: 180234,
      students: 2500000,
      level: "Beginner",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      price: "$49/month",
      category: "Data Science"
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      instructor: "Dr. Sarah Johnson",
      university: "University of Michigan",
      rating: 4.8,
      reviews: 95432,
      students: 1200000,
      level: "Intermediate",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      price: "$39/month",
      category: "Computer Science"
    },
    {
      id: 3,
      title: "Python for Everybody",
      instructor: "Charles Severance",
      university: "University of Michigan",
      rating: 4.8,
      reviews: 205678,
      students: 3200000,
      level: "Beginner",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      price: "Free",
      category: "Computer Science"
    },
    {
      id: 4,
      title: "Digital Marketing Specialization",
      instructor: "Prof. David Bell",
      university: "University of Pennsylvania",
      rating: 4.7,
      reviews: 68901,
      students: 890000,
      level: "Beginner",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      price: "$49/month",
      category: "Business"
    },
    {
      id: 5,
      title: "Introduction to Psychology",
      instructor: "Dr. Paul Bloom",
      university: "Yale University",
      rating: 4.9,
      reviews: 112345,
      students: 1800000,
      level: "Beginner",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1ง590-brain-psychology?w=400&h=250&fit=crop",
      price: "Free",
      category: "Social Sciences"
    },
    {
      id: 6,
      title: "Financial Markets",
      instructor: "Prof. Robert Shiller",
      university: "Yale University",
      rating: 4.8,
      reviews: 78234,
      students: 1100000,
      level: "Intermediate",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      price: "$39/month",
      category: "Business"
    },
    {
      id: 7,
      title: "Deep Learning Specialization",
      instructor: "Andrew Ng",
      university: "DeepLearning.AI",
      rating: 4.9,
      reviews: 145678,
      students: 950000,
      level: "Advanced",
      duration: "5 months",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      price: "$49/month",
      category: "Data Science"
    },
    {
      id: 8,
      title: "Google Data Analytics Professional Certificate",
      instructor: "Google Career Certificates",
      university: "Google",
      rating: 4.8,
      reviews: 89012,
      students: 750000,
      level: "Beginner",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      price: "$39/month",
      category: "Data Science"
    }
  ];

  const categories = ['all', 'Data Science', 'Computer Science', 'Business', 'Social Sciences'];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Coursera</span>
            </button>
            <nav className="hidden md:flex gap-6">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Explore</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                Degrees <ChevronDown size={16} />
              </button>
              <button className="text-gray-700 hover:text-blue-600 font-medium">For Enterprise</button>
            </nav>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-blue-600 font-medium hover:underline">Log In</button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700">
              Join for Free
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
            />
            <button className="block w-full text-left py-2 text-gray-700">Explore</button>
            <button className="block w-full text-left py-2 text-gray-700">Degrees</button>
            <button className="block w-full text-left py-2 text-gray-700">For Enterprise</button>
            <button className="block w-full text-left py-2 text-blue-600 font-medium">Log In</button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full font-medium">
              Join for Free
            </button>
          </div>
        </div>
      )}
    </header>
  );

  const Hero = () => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn Without Limits
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Join for Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Try Coursera for Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Stats = () => (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">7,000+</div>
            <div className="text-gray-600">Courses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">124M</div>
            <div className="text-gray-600">Learners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">275+</div>
            <div className="text-gray-600">Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">6,900+</div>
            <div className="text-gray-600">Companies</div>
          </div>
        </div>
      </div>
    </div>
  );

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          {course.price}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm text-gray-600 mb-2">{course.university}</div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
          {course.title}
        </h3>
        <div className="text-sm text-gray-600 mb-3">{course.instructor}</div>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{course.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({course.reviews.toLocaleString()} reviews)</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{(course.students / 1000000).toFixed(1)}M</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award size={16} />
            <span>{course.level}</span>
          </div>
        </div>

        <button 
          onClick={() => setCurrentPage('course-' + course.id)}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition mb-2"
        >
          View Course
        </button>
        
        <button className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
          <BookOpen size={18} />
          Take Test
        </button>
      </div>
    </div>
  );

  const CoursePage = ({ courseId }) => {
    const course = courses.find(c => c.id === parseInt(courseId));
    if (!course) return null;

    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-blue-200 hover:text-white mb-4 flex items-center gap-2"
            >
              ← Back to all courses
            </button>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="text-sm mb-2">{course.university}</div>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-blue-100 text-lg mb-6">
                  Master the fundamentals and advance your career with this comprehensive specialization
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-blue-200">({course.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{(course.students / 1000000).toFixed(1)}M students</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                    Enroll for Free
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 flex items-center gap-2">
                    <BookOpen size={20} />
                    Take Test
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={course.image} alt={course.title} className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">About this Course</h2>
                <p className="text-gray-700 mb-4">
                  This comprehensive specialization will teach you the fundamental concepts and practical applications 
                  used by professionals in the field. You'll learn through hands-on projects and real-world examples.
                </p>
                <p className="text-gray-700">
                  By the end of this course, you'll have built a strong foundation and be ready to apply your 
                  knowledge in real-world scenarios.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Master the core concepts and principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Build real-world projects from scratch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Apply industry best practices and techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Prepare for professional certification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map(week => (
                    <div key={week} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold mb-2">Week {week}</h3>
                      <p className="text-gray-600 text-sm">
                        {week === 1 && "Introduction and fundamentals"}
                        {week === 2 && "Core concepts and applications"}
                        {week === 3 && "Advanced techniques and tools"}
                        {week === 4 && "Final project and assessment"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="font-bold mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Duration</div>
                      <div className="text-gray-600 text-sm">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Level</div>
                      <div className="text-gray-600 text-sm">{course.level}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Language</div>
                      <div className="text-gray-600 text-sm">English (Subtitles available)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Category</div>
                      <div className="text-gray-600 text-sm">{course.category}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-2xl font-bold text-blue-600 mb-4">{course.price}</div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-3">
                    Enroll Now
                  </button>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2">
                    <BookOpen size={20} />
                    Take Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HomePage = () => (
    <>
      <Hero />
      <Stats />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Explore our catalog</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Courses' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <div className="bg-blue-50 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Take the next step toward your personal and professional goals</h2>
          <p className="text-xl text-gray-600 mb-8">Join now to receive personalized recommendations from the full Coursera catalog</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Join for Free
          </button>
        </div>
      </div>
    </>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Coursera</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">What We Offer</a></li>
              <li><a href="#" className="hover:text-white">Leadership</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Learners</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Beta Testers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">More</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Mobile App</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Download iOS App</a></li>
              <li><a href="#" className="hover:text-white">Download Android App</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Coursera Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {currentPage === 'home' ? (
        <HomePage />
      ) : currentPage.startsWith('course-') ? (
        <CoursePage courseId={currentPage.replace('course-', '')} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  );
};

export default CourseraClone;