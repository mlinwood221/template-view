import { useEffect, useMemo, useState } from 'react'
import { TemplateCarousel } from './components/TemplateCarousel'
import { TemplateInfo } from './components/TemplateInfo'
import { getTemplates } from './api/templateApi'
import './App.css'

const EMPTY_TEMPLATE = {
  id: '0000',
  title: '',
  description: '',
  cost: '',
  thumbnail: '',
  image: ''
}

const ITEMS_PER_PAGE = 4

function App() {
  const [templates, setTemplates] = useState([])
  const [selectedItem, setSelectedItem] = useState(EMPTY_TEMPLATE)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getTemplates()
      .then((response) => {
        setTemplates(response.data)
        setSelectedItem(response.data?.[0] || EMPTY_TEMPLATE)
      })
      .catch((error) => {
        console.log('Error fetching templates:', error)
      });
  }, []);

  const onSelect = (template) => {
    setSelectedItem(template)
  }

  const onNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const onPrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const totalPages = Math.ceil(templates.length / ITEMS_PER_PAGE)

  const currentItems = useMemo(() => {
    return templates.slice(ITEMS_PER_PAGE * (currentPage - 1), ITEMS_PER_PAGE * currentPage)
  }, [templates, currentPage])

  return (
    <div id="container">
      <header>
      Code Development Project
      </header>
      <div id="main" role="main">
        {templates.length ? (
          <>
            <TemplateInfo item={selectedItem} />
            <TemplateCarousel
              selectedItem={selectedItem}
              onSelect={onSelect}
              items={currentItems}
              canNext={currentPage < totalPages}
              onNext={onNext}
              canPrev={currentPage > 1}
              onPrev={onPrev}
            />
          </>
        ) : (
          <span>No templates found.</span>
        )}
      </div>
    </div>
  );
}

export default App;
