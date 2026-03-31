const Skeleton = ({ width = '100%', height = 20, borderRadius = 8, style }) => {
  return (
    <div
      className={'skeleton'}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
    />
  );
};

export default Skeleton;
