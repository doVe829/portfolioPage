import { ReactComponent as VueLogo } from '../icons/vue.svg';
import { ReactComponent as SvelteLogo } from '../icons/svelte.svg';
import { ReactComponent as KotlinLogo } from '../icons/kotlin.svg';
const IconComponent = ({ stackName }) => {
  const classes = 'frameworkIcon column is-2';
  if (stackName === 'vue') {
    return <VueLogo className={classes} />;
  }
  if (stackName === 'svelte') {
    return <SvelteLogo className={classes} />;
  }
  if (stackName === 'kotlin') {
    return <KotlinLogo className={classes} />;
  }
};

export default IconComponent;
