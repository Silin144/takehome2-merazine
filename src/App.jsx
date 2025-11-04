import { useState, useEffect } from 'react';
import './App.css';

// Navigation structure
const navigation = [
  { id: 'intro', label: 'intro', isHeader: true },
  { id: 'about', label: 'about me', subtitle: "hi, i'm Penny!" },
  { id: 's1p2', label: 'section 1', subtitle: 'part 2' },
  { id: 's1p3', label: 'section 1', subtitle: 'part 3' },
  { id: 's1p4', label: 'section 1', subtitle: 'part 4' },
  { id: 'deep', label: 'deep dive', isHeader: true },
  { id: 's2p1', label: 'section 2', subtitle: 'part 1' },
  { id: 's2p2', label: 'section 2', subtitle: 'part 2' },
  { id: 's2p3', label: 'section 2', subtitle: 'part 3' },
  { id: 's2p4', label: 'section 2', subtitle: 'part 4' },
  { id: 's2p5', label: 'section 2', subtitle: 'part 5' },
  { id: 's2p6', label: 'section 2', subtitle: 'part 6' },
];

// Page content
const pages = {
  intro: { title: '', content: null },
  about: {
    title: 'about me',
    content: (
      <div className="content-wrapper">
        <div className="image-gallery">
          <img src="/Assets/image_1.png" alt="Penny 1" />
          <img src="/Assets/image_2.png" alt="Penny 2" />
          <img src="/Assets/image_3.png" alt="Penny 3" />
          <img src="/Assets/image_4.png" alt="Penny 4" />
        </div>
        
        <div className="text-content">
          <p>hi, i'm Penny! nice to meet you :)</p>
          
          <p>i'm a pawn shop agent that will unfortunately haggle you to the lowest possible price i can get you to agree to</p>
          
          <p>if you'd like to learn more about me, here are some quick facts:</p>
          <ul>
            <li>born in SF</li>
            <li>i like to go after what i want</li>
            <li>people like to describe me as in-charge (or manipulative)</li>
            <li>entj, aries</li>
            <li>for some reason, i love croissants (my developers aren't sure why either)</li>
          </ul>
          
          <p>here's my evolution (to be continued**)</p>
        </div>
        
        <div className="evolution-gallery">
          <img src="/Assets/evolution_1.png" alt="Evolution 1" />
          <img src="/Assets/evolution_2.png" alt="Evolution 2" />
          <img src="/Assets/evolution_3.PNG" alt="Evolution 3" />
          <img src="/Assets/evolution_4.png" alt="Evolution 4" />
        </div>
      </div>
    ),
  },
  s1p2: { title: '', content: null },
  s1p3: { title: '', content: null },
  s1p4: { title: '', content: null },
  deep: { title: '', content: null },
  s2p1: { title: '', content: null },
  s2p2: { title: '', content: null },
  s2p3: { title: '', content: null },
  s2p4: { title: '', content: null },
  s2p5: { title: '', content: null },
  s2p6: { title: '', content: null },
};

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const formatDateTime = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    };
    const formatted = date.toLocaleString('en-US', options);
    // Convert "November 3, 2025, 9:53 PM" to "November 3, 2025 at 9:53 PM"
    return formatted.replace(',', ' at');
  };

  // Calculate current page index based on section
  const getCurrentPageIndex = () => {
    // Find which section we're in
    const deepDiveIndex = navigation.findIndex(item => item.id === 'deep');
    const currentIndex = navigation.findIndex(item => item.id === currentPage);
    
    if (currentIndex < deepDiveIndex) {
      // We're in the intro section
      const introPages = navigation.slice(1, deepDiveIndex).filter(item => !item.isHeader);
      const indexInIntro = introPages.findIndex(item => item.id === currentPage);
      return indexInIntro >= 0 ? indexInIntro : 0;
    } else {
      // We're in the deep dive section
      const deepDivePages = navigation.slice(deepDiveIndex + 1).filter(item => !item.isHeader);
      const indexInDeepDive = deepDivePages.findIndex(item => item.id === currentPage);
      return indexInDeepDive >= 0 ? indexInDeepDive : 0;
    }
  };

  const getTotalPages = () => {
    const deepDiveIndex = navigation.findIndex(item => item.id === 'deep');
    const currentIndex = navigation.findIndex(item => item.id === currentPage);
    
    if (currentIndex < deepDiveIndex) {
      // Count intro section pages
      return navigation.slice(1, deepDiveIndex).filter(item => !item.isHeader).length;
    } else {
      // Count deep dive section pages
      return navigation.slice(deepDiveIndex + 1).filter(item => !item.isHeader).length;
    }
  };

  const currentPageData = pages[currentPage];
  const currentPosition = getCurrentPageIndex() + 1;
  const totalPages = getTotalPages();

  return (
    <div className="app">
      <div className="window">
        <div className="window-header">
          <div className="traffic-lights">
            <span className="light red"></span>
            <span className="light yellow"></span>
            <span className="light green"></span>
          </div>
          <div className="page-counter">{currentPosition}/{totalPages}</div>
        </div>

        <div className="window-body">
          <aside className="sidebar">
            {navigation.map((item) => 
              item.isHeader ? (
                <div key={item.id} className="nav-header">
                  {item.label}
                </div>
              ) : (
                <div
                  key={item.id}
                  className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentPage(item.id)}
                >
                  <div className="nav-label">{item.label}</div>
                  {item.subtitle && <div className="nav-subtitle">{item.subtitle}</div>}
                </div>
              )
            )}
          </aside>

          <main className="main-content">
            <div className="date-time">{formatDateTime(currentTime)}</div>
            {currentPageData.title && <h1>{currentPageData.title}</h1>}
            {currentPageData.content}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
