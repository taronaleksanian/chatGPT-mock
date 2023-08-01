export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (str: string) => {
      const r = (Math.random() * 16) | 0,
        v = str === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
};
