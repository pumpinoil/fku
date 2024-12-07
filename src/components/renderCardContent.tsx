import Article from './integrations/Article';
import AnimatedCardWrapper from './integrations/AnimatedCardWrapper';
import CardList from './integrations/CardList';
import Dashboard from './integrations/Dashboard';
import FormComp from './integrations/Forms';
import FancyButtonDemo from './integrations/FancyButton';
import FractalCanvasMini from './integrations/FractalCanvasMini';
import GridLayoutDemo from './integrations/GridLayout';
import IconWithTooltipDemo from '../components/integrations/IconWithTooltip';
import InteractiveImage from './integrations/InteractiveImage';
import LayoutContainer from '../components/integrations/Layout';
import MagickCard3D from './integrations/MagickCard3D';
import VideoPlayer from './integrations/VideoPlayer';
import { MagickCardProps } from '../types/magickCard';

export function renderCardContent(card: MagickCardProps) {
  switch (card.componentType) {
    case 'article_comp':
      return <Article content={card.content} />;
    case 'animated_card_comp':
      return <AnimatedCardWrapper content={card.content} />;
    case 'card_list_comp':
      return <CardList />;
    case 'dashboard_comp':
      return <Dashboard />;
    case 'form_comp':
      return <FormComp />;
    case 'fancy_button_comp':
      return <FancyButtonDemo />;
    case 'fractal_canvas_comp':
      // If fractalParam is used, we could pass it to FractalCanvasMini
      { const fractalParam = typeof card.componentData?.fractalParam === 'number' ? card.componentData.fractalParam : 1;
      return <FractalCanvasMini fractalParam={fractalParam} />; }
    case 'grid_layout_comp':
      return <GridLayoutDemo />;
    case 'icon_with_tooltip_comp':
      return <IconWithTooltipDemo />;
    case 'interactive_image_comp':
      return <InteractiveImage />;
    case 'layout_comp':
      return <LayoutContainer />;
    case 'magick_card_3d_comp':
      return <MagickCard3D />;
    case 'video_player_comp': {
      // Use the videoURL from componentData
      const videoURL: string = typeof card.componentData?.videoURL === 'string' ? card.componentData.videoURL : "https://www.youtube.com/embed/dQw4w9WgXcQ";
      return <VideoPlayer videoURL={videoURL} />;
    }
    default:
      return <div className="prose prose-invert p-2" dangerouslySetInnerHTML={{ __html: card.content }} />;
  }
}
