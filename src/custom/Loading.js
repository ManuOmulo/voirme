import Loadable from "react-loadable"

export const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}


export const ImportComponent = (path) => {
  const component = Loadable({
    loader: () => import(path),
    loading: Loading,
    timeout: 10000,
    delay: 300
  })

  return component
}