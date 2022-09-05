import React from 'react';
import Header from './Header';

class NotedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: window.innerWidth >= 1024 ? true : false,
    };
    window.addEventListener('resize', () => {
      window.innerWidth >= 1024 && this.setState({nav: true});
    });

    this.onOpenNavHandler = this.onOpenNavHandler.bind(this);
    this.onCloseNavHandler = this.onCloseNavHandler.bind(this);
  }

  onOpenNavHandler() {
    this.setState({nav: true});
  }

  onCloseNavHandler() {
    this.setState({nav: false});
  }

  render() {
    return (
      <>
        <Header
          nav={this.state.nav}
          onOpenNav={this.onOpenNavHandler}
          onCloseNav={this.onCloseNavHandler}
        />
        <main>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ultricies bibendum mi, et fringilla enim imperdiet et. Aenean ut
          interdum lacus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nullam commodo elementum odio eget venenatis. Donec purus
          erat, lacinia nec faucibus malesuada, egestas sit amet arcu. Donec
          egestas, ligula vitae suscipit viverra, odio orci elementum urna, at
          accumsan enim purus eget felis. Nullam condimentum varius justo. Cras
          in vulputate felis. Nam sed diam magna. Nullam suscipit nibh sit amet
          odio vestibulum malesuada. Ut ornare sapien libero, in mattis quam
          fringilla et. Proin porttitor iaculis posuere. Quisque malesuada orci
          purus, id cursus purus tempor vulputate. Morbi sollicitudin, ligula et
          iaculis rutrum, orci lectus consectetur ante, at blandit risus est
          vitae justo. Curabitur egestas vel nulla sit amet tempus. Nullam
          ornare, eros vel pellentesque commodo, ligula diam suscipit massa, sit
          amet volutpat ex elit sit amet est. Fusce imperdiet leo non volutpat
          fermentum. Vivamus pharetra urna et ligula consequat consectetur. In
          vel enim vitae leo congue tempor sed in est. Nunc maximus ac diam nec
          porttitor. Integer nec sem purus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. In fermentum, dui in elementum pulvinar,
          purus turpis sagittis ante, nec vestibulum turpis ligula ut neque.
          Proin ut purus erat. Aliquam placerat commodo purus in porttitor. Duis
          at enim luctus, pretium lacus in, feugiat risus. Praesent eget magna
          ullamcorper, scelerisque diam nec, varius elit. Integer nulla libero,
          lacinia quis ligula ac, fringilla sagittis tellus. Suspendisse aliquet
          tristique tellus id aliquet. Aliquam vitae efficitur lectus. Integer
          tempus eget nulla sed consectetur. Morbi in pellentesque quam.
          Curabitur pellentesque sem sed augue fringilla tincidunt in quis
          mauris. Pellentesque consectetur nisl eget tortor molestie volutpat.
          Maecenas laoreet non nisl id faucibus. Aenean convallis, lectus sit
          amet rutrum congue, ante metus gravida purus, sit amet posuere turpis
          ipsum vel ipsum. Quisque orci mi, mollis ut tempus a, sodales eu enim.
          Pellentesque nec magna at lorem iaculis congue. Fusce commodo ex id mi
          consectetur pharetra. Donec dictum augue velit, ut feugiat magna
          tempor vitae. Aenean nunc sem, bibendum ac urna sed, condimentum
          euismod magna. Nam ac eleifend ante. Donec a rutrum ipsum, id sodales
          augue. Mauris et mauris at metus congue consequat vel sit amet quam.
          Nunc ut velit eget justo blandit viverra vulputate et est.
          Pellentesque pulvinar dapibus urna, in mattis eros laoreet at. Donec
          non vehicula metus, vel pellentesque nibh. Quisque imperdiet, turpis
          eget consequat pulvinar, sem augue pharetra lacus, non semper urna
          orci quis leo. Vestibulum pulvinar dui in felis auctor cursus.
          Curabitur sit amet enim vitae lectus commodo euismod. Sed fringilla
          venenatis elit, eu vulputate magna. Morbi ultrices, arcu eu lacinia
          suscipit, diam ipsum gravida lectus, id consequat libero risus ac
          risus. Vestibulum volutpat, sapien at dictum cursus, nisi lectus
          faucibus nulla, quis eleifend est est non justo. Donec imperdiet vel
          nisl non accumsan. Sed ac mi tortor. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Phasellus et
          elit gravida, vulputate nunc sit amet, dapibus nunc. Donec ac orci
          malesuada, mollis ex et, malesuada nibh. Morbi sed libero non quam
          malesuada ultricies sed nec nunc. Proin vel urna sit amet libero
          aliquet tempor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut felis magna, eleifend ut metus nec, blandit ornare diam.
          Donec ipsum nulla, vulputate a mollis id, aliquet in nulla. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies
          bibendum mi, et fringilla enim imperdiet et. Aenean ut interdum lacus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
          commodo elementum odio eget venenatis. Donec purus erat, lacinia nec
          faucibus malesuada, egestas sit amet arcu. Donec egestas, ligula vitae
          suscipit viverra, odio orci elementum urna, at accumsan enim purus
          eget felis. Nullam condimentum varius justo. Cras in vulputate felis.
          Nam sed diam magna. Nullam suscipit nibh sit amet odio vestibulum
          malesuada. Ut ornare sapien libero, in mattis quam fringilla et. Proin
          porttitor iaculis posuere. Quisque malesuada orci purus, id cursus
          purus tempor vulputate. Morbi sollicitudin, ligula et iaculis rutrum,
          orci lectus consectetur ante, at blandit risus est vitae justo.
          Curabitur egestas vel nulla sit amet tempus. Nullam ornare, eros vel
          pellentesque commodo, ligula diam suscipit massa, sit amet volutpat ex
          elit sit amet est. Fusce imperdiet leo non volutpat fermentum. Vivamus
          pharetra urna et ligula consequat consectetur. In vel enim vitae leo
          congue tempor sed in est. Nunc maximus ac diam nec porttitor. Integer
          nec sem purus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. In fermentum, dui in elementum pulvinar, purus turpis
          sagittis ante, nec vestibulum turpis ligula ut neque. Proin ut purus
          erat. Aliquam placerat commodo purus in porttitor. Duis at enim
          luctus, pretium lacus in, feugiat risus. Praesent eget magna
          ullamcorper, scelerisque diam nec, varius elit. Integer nulla libero,
          lacinia quis ligula ac, fringilla sagittis tellus. Suspendisse aliquet
          tristique tellus id aliquet. Aliquam vitae efficitur lectus. Integer
          tempus eget nulla sed consectetur. Morbi in pellentesque quam.
          Curabitur pellentesque sem sed augue fringilla tincidunt in quis
          mauris. Pellentesque consectetur nisl eget tortor molestie volutpat.
          Maecenas laoreet non nisl id faucibus. Aenean convallis, lectus sit
          amet rutrum congue, ante metus gravida purus, sit amet posuere turpis
          ipsum vel ipsum. Quisque orci mi, mollis ut tempus a, sodales eu enim.
          Pellentesque nec magna at lorem iaculis congue. Fusce commodo ex id mi
          consectetur pharetra. Donec dictum augue velit, ut feugiat magna
          tempor vitae. Aenean nunc sem, bibendum ac urna sed, condimentum
          euismod magna. Nam ac eleifend ante. Donec a rutrum ipsum, id sodales
          augue. Mauris et mauris at metus congue consequat vel sit amet quam.
          Nunc ut velit eget justo blandit viverra vulputate et est.
          Pellentesque pulvinar dapibus urna, in mattis eros laoreet at. Donec
          non vehicula metus, vel pellentesque nibh. Quisque imperdiet, turpis
          eget consequat pulvinar, sem augue pharetra lacus, non semper urna
          orci quis leo. Vestibulum pulvinar dui in felis auctor cursus.
          Curabitur sit amet enim vitae lectus commodo euismod. Sed fringilla
          venenatis elit, eu vulputate magna. Morbi ultrices, arcu eu lacinia
          suscipit, diam ipsum gravida lectus, id consequat libero risus ac
          risus. Vestibulum volutpat, sapien at dictum cursus, nisi lectus
          faucibus nulla, quis eleifend est est non justo. Donec imperdiet vel
          nisl non accumsan. Sed ac mi tortor. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Phasellus et
          elit gravida, vulputate nunc sit amet, dapibus nunc. Donec ac orci
          malesuada, mollis ex et, malesuada nibh. Morbi sed libero non quam
          malesuada ultricies sed nec nunc. Proin vel urna sit amet libero
          aliquet tempor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut felis magna, eleifend ut metus nec, blandit ornare diam.
          Donec ipsum nulla, vulputate a mollis id, aliquet in nulla.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas ultricies
          bibendum mi, et fringilla enim imperdiet et. Aenean ut interdum lacus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
          commodo elementum odio eget venenatis. Donec purus erat, lacinia nec
          faucibus malesuada, egestas sit amet arcu. Donec egestas, ligula vitae
          suscipit viverra, odio orci elementum urna, at accumsan enim purus
          eget felis. Nullam condimentum varius justo. Cras in vulputate felis.
          Nam sed diam magna. Nullam suscipit nibh sit amet odio vestibulum
          malesuada. Ut ornare sapien libero, in mattis quam fringilla et. Proin
          porttitor iaculis posuere. Quisque malesuada orci purus, id cursus
          purus tempor vulputate. Morbi sollicitudin, ligula et iaculis rutrum,
          orci lectus consectetur ante, at blandit risus est vitae justo.
          Curabitur egestas vel nulla sit amet tempus. Nullam ornare, eros vel
          pellentesque commodo, ligula diam suscipit massa, sit amet volutpat ex
          elit sit amet est. Fusce imperdiet leo non volutpat fermentum. Vivamus
          pharetra urna et ligula consequat consectetur. In vel enim vitae leo
          congue tempor sed in est. Nunc maximus ac diam nec porttitor. Integer
          nec sem purus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. In fermentum, dui in elementum pulvinar, purus turpis
          sagittis ante, nec vestibulum turpis ligula ut neque. Proin ut purus
          erat. Aliquam placerat commodo purus in porttitor. Duis at enim
          luctus, pretium lacus in, feugiat risus. Praesent eget magna
          ullamcorper, scelerisque diam nec, varius elit. Integer nulla libero,
          lacinia quis ligula ac, fringilla sagittis tellus. Suspendisse aliquet
          tristique tellus id aliquet. Aliquam vitae efficitur lectus. Integer
          tempus eget nulla sed consectetur. Morbi in pellentesque quam.
          Curabitur pellentesque sem sed augue fringilla tincidunt in quis
          mauris. Pellentesque consectetur nisl eget tortor molestie volutpat.
          Maecenas laoreet non nisl id faucibus. Aenean convallis, lectus sit
          amet rutrum congue, ante metus gravida purus, sit amet posuere turpis
          ipsum vel ipsum. Quisque orci mi, mollis ut tempus a, sodales eu enim.
          Pellentesque nec magna at lorem iaculis congue. Fusce commodo ex id mi
          consectetur pharetra. Donec dictum augue velit, ut feugiat magna
          tempor vitae. Aenean nunc sem, bibendum ac urna sed, condimentum
          euismod magna. Nam ac eleifend ante. Donec a rutrum ipsum, id sodales
          augue. Mauris et mauris at metus congue consequat vel sit amet quam.
          Nunc ut velit eget justo blandit viverra vulputate et est.
          Pellentesque pulvinar dapibus urna, in mattis eros laoreet at. Donec
          non vehicula metus, vel pellentesque nibh. Quisque imperdiet, turpis
          eget consequat pulvinar, sem augue pharetra lacus, non semper urna
          orci quis leo. Vestibulum pulvinar dui in felis auctor cursus.
          Curabitur sit amet enim vitae lectus commodo euismod. Sed fringilla
          venenatis elit, eu vulputate magna. Morbi ultrices, arcu eu lacinia
          suscipit, diam ipsum gravida lectus, id consequat libero risus ac
          risus. Vestibulum volutpat, sapien at dictum cursus, nisi lectus
          faucibus nulla, quis eleifend est est non justo. Donec imperdiet vel
          nisl non accumsan. Sed ac mi tortor. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Phasellus et
          elit gravida, vulputate nunc sit amet, dapibus nunc. Donec ac orci
          malesuada, mollis ex et, malesuada nibh. Morbi sed libero non quam
          malesuada ultricies sed nec nunc. Proin vel urna sit amet libero
          aliquet tempor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut felis magna, eleifend ut metus nec, blandit ornare diam.
          Donec ipsum nulla, vulputate a mollis id, aliquet in nulla.
        </main>
      </>
    );
  }
}

export default NotedApp;

