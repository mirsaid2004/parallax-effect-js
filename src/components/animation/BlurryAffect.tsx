import { RefObject, useCallback, useEffect, useRef } from "react";
import { makeStyles } from "../../styles";

interface IBlurryAffect {
  isBrowserBlob?: boolean;
  externalRef?: RefObject<HTMLElement>;
}
const useStyles = makeStyles()(() => ({
  blur: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: "2",
    backdropFilter: "blur(12vmax)",
  },
  blob_in_browser: {
    height: "25vmax !important",
  },
  blob: {
    backgroundColor: "white",
    height: "45vmax",
    aspectRatio: "1",
    position: "absolute",
    left: "50%",
    top: "50%",
    translate: "-50% -50%",
    borderRadius: "50%",
    background: "linear-gradient(to right,#2bff75,#99cc9c,#ffe32b, #ffa02b)",
    animation: "rotate 20s infinite",
    opacity: "0.8",
  },
}));
function BlurryAffect({ isBrowserBlob, externalRef }: IBlurryAffect) {
  const blob = useRef<HTMLDivElement>(null);
  const blur = useRef<HTMLDivElement>(null);
  const { classes, cx } = useStyles();

  const trackPointer = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    blob?.current?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  }, []);
  useEffect(() => {
    if (externalRef && externalRef.current) {
      externalRef.current.addEventListener("mousemove", trackPointer);
      console.log(externalRef.current);
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        externalRef?.current?.removeEventListener("mousemove", trackPointer);
      };
    }
    return () => undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalRef]);
  return (
    <>
      <div
        ref={blob}
        className={
          isBrowserBlob
            ? cx(classes.blob, classes.blob_in_browser)
            : classes.blob
        }
      ></div>
      <div ref={blur} className={classes.blur}></div>
    </>
  );
}

export default BlurryAffect;
