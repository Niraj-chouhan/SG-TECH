const imageFiles = import.meta.glob('../../assets/images/home/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const galleryGroups = [
  { category: 'CERTIFICATION', event: 'Certification', title: 'Certification', files: ['certification-01.jpg', 'certification-02.jpg', 'certification-03.jpg', 'certification-04.jpg', 'certification-05.jpg'] },
  { category: 'OFFICIAL EVENTS', event: 'Teachers Day', title: 'Teachers Day', files: ['teachers-day-01.jpg', 'teachers-day-02.jpg', 'teachers-day-03.jpg', 'teachers-day-04.jpg', 'teachers-day-05.jpg', 'teachers-day-06.jpg'] },
  { category: 'OFFICIAL EVENTS', event: 'Mock Interview', title: 'Mock Interview', files: ['mock-interview.png'] },
  { category: 'OFFICIAL EVENTS', event: 'Workshop', title: 'Workshop', files: ['workshop-01.jpg', 'workshop-02.jpg', 'workshop-03.jpg'] },
  { category: 'OFFICIAL EVENTS', event: 'Khargone', title: 'Khargone', files: ['khargone-01.jpg', 'khargone-02.jpg', 'khargone-03.jpg', 'khargone-04.jpg'] },
  { category: 'OFFICIAL EVENTS', event: 'New Year', title: 'New Year', files: ['new-year-01.jpg', 'new-year-02.jpg', 'new-year-03.jpg'] },
  { category: 'CULTURAL EVENTS', event: 'Navratri', title: 'Navratri', files: ['navratri-01.jpg', 'navratri-02.jpg', 'navratri-03.jpg', 'navratri-04.jpg', 'navratri-05.jpg', 'navratri-06.jpg'] },
  { category: 'TRIP', event: 'Shimla Trip', title: 'Shimla Trip', files: ['shimla-trip-01.jpg', 'shimla-trip-02.jpg', 'shimla-trip-03.jpg', 'shimla-trip-04.jpg', 'shimla-trip-05.jpg', 'shimla-trip-06.jpg'] },
  { category: 'BIRTHDAY BASH', event: 'Birthday', title: 'Birthday', files: ['birthday-celebration.jpg'] },
]

export const galleryCategories = ['ALL', ...new Set(galleryGroups.map(({ category }) => category))]

export const galleryImages = galleryGroups.flatMap(({ category, event, title, files }) =>
  files.flatMap((file, index) => {
    const key = `../../assets/images/home/gallery/${file}`
    const src = imageFiles[key]
    return src ? [{
      id: `${event}-${file}`,
      src,
      title,
      category,
      event,
      alt: `${title} at EdTech Savers, image ${index + 1}`,
    }] : []
  }),
)

export const eventsForCategory = (category) => [...new Set(
  galleryImages
    .filter((image) => category === 'ALL' || image.category === category)
    .map((image) => image.event),
)]
