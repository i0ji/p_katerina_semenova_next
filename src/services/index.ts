export async function fetchProjects(): Promise<SlidesDataModel[]> {
  const res = await fetch('/fetchData.php');

  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }

  return await res.json();
}

export default function scrollToSide(direction: string) {
  if (typeof window === 'undefined') return;
  switch (direction) {
    case 'top':
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      break;

    case 'bottom':
      window.scrollTo({
        top: document.body.scrollHeight + 600,
        behavior: 'smooth',
      });
      break;
  }
}
