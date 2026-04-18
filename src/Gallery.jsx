import { useState } from 'react'

const recipeImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    description: 'A colorful grilled chicken salad bowl with eggs, corn, tomatoes, cucumber, and fresh greens.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    description: 'A fresh veggie bowl with avocado, chickpeas, sweet potato, cabbage, tomatoes, and leafy greens.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
    description: 'Pasta tossed with green pesto sauce and topped with fresh cherry tomatoes.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
    description: 'Avocado toast topped with boiled eggs and served with fresh spinach.',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    description: 'A plated savory meal with sliced meat, vegetables, herbs, and dipping sauce.',
  },
]

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentImage = recipeImages[currentIndex]
  const isFirstImage = currentIndex === 0
  const isLastImage = currentIndex === recipeImages.length - 1
  const statusMessage = isFirstImage
    ? 'First image reached. Previous is disabled.'
    : isLastImage
      ? 'Last image reached. Next is disabled.'
      : ''

  const showPreviousImage = () => {
    if (!isFirstImage) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const showNextImage = () => {
    if (!isLastImage) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section className="gallery-card">
      <p className="gallery-label">Recipe Image Gallery</p>
      <h1>Simple React Recipe Gallery</h1>
      <div className="gallery-image-frame">
        <p className="gallery-status">
          Image {currentIndex + 1} of {recipeImages.length}
        </p>

        <img
          className="gallery-image"
          src={currentImage.url}
          alt={currentImage.description}
        />
      </div>

      <div className="gallery-info">
        <p className="gallery-description">{currentImage.description}</p>
      </div>

      <div className="gallery-buttons">
        <button onClick={showPreviousImage} disabled={isFirstImage}>
          Previous
        </button>
        <button onClick={showNextImage} disabled={isLastImage}>
          Next
        </button>
      </div>

      {statusMessage && (
        <p className="gallery-message" aria-live="polite">
          {statusMessage}
        </p>
      )}
    </section>
  )
}

export default Gallery
