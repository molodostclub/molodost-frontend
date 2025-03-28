import { tablet } from "@/styles";
import { style } from "@vanilla-extract/css";

export const videoContainer = style([
  {
    width: "100%",
    height: 500,
    borderRadius: 14,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none"
  },
  tablet({
  width: "100%",
  height: 500,
  borderRadius: 14,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "none"
})]);

export const videoElement = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
