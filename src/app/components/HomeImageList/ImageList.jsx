
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
  return (
    <ImageList sx={{ width: 750, height: 520 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/images/Homepage/port2.jpg',
    title: 'Image1',
  },
  {
    img: '/images/Homepage/port3.jpg',
    title: 'Image2',
  },
  {
    img: '/images/Homepage/port4.jpg',
    title: 'Image3',
  },
  {
    img: '/images/Homepage/port5.jpg',
    title: 'Image4',
  },
  {
    img: '/images/Homepage/port6.jpg',
    title: 'Image5',
  },
  {
    img: '/images/Homepage/port7.jpg',
    title: 'Image6',
  },
  {
    img: '/images/Homepage/port8.jpg',
    title: 'Image7',
  },
  {
    img: '/images/Homepage/portfolio1.jpg',
    title: 'Image8',
  },
  
];