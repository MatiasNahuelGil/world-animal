import naturaleza from '../assets/images/naturaleza.jpg';
import montaña from '../assets/images/montaña-lago.jpg';

export const HOME_SECTIONS = [
    {
      imageSrc: {naturaleza},
      imageAlt: "Casa en montaña con un lago a su alrededor",
      title: "Descubre la fauna con Animal Flix",
      content: (
        <>
          <p>
            Explora el mundo animal en su máximo esplendor, disfruta de los mejores videos
            que la fauna nos puede ofrecer.
          </p>
          <button>Explorar</button>
        </>
      ),
    },
    {
      imageSrc: {montaña},
      imageAlt: "Vista de montañas",
      title: "Enorme cantidad de biomas",
      content: (
        <>
          <button>Ver más</button>
          <p>
            Visita nuestros mejores biomas por todo el mundo, sumérgete en este
            mundo y aprecia los mejores paisajes.
          </p>
        </>
      ),
      reverse: true,
    },
  ];


  export const TITLES = ["Increíbles paisajes", "Diversidad de animales"];