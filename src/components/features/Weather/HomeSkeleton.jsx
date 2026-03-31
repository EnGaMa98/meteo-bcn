import Skeleton from '../../shared/Skeleton';

const HomeSkeleton = () => {
  return (
    <>
      <div className={'card hero'}>
        <Skeleton width={140} height={16} />
        <div className={'hero__temp-row'} style={{ marginTop: 12 }}>
          <Skeleton width={120} height={72} borderRadius={12} />
          <Skeleton width={56} height={56} borderRadius={28} />
        </div>
        <Skeleton width={100} height={16} style={{ marginTop: 8 }} />
      </div>

      <div className={'card hourly'}>
        <Skeleton width={140} height={16} />
        <div className={'hourly__list'} style={{ marginTop: 12 }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={'hour-chip'} style={{ gap: 8 }}>
              <Skeleton width={30} height={12} />
              <Skeleton width={24} height={24} borderRadius={12} />
              <Skeleton width={24} height={14} />
              <Skeleton width={30} height={10} />
            </div>
          ))}
        </div>
      </div>

      <div className={'card detail-card'}>
        <Skeleton width={100} height={14} />
        <Skeleton width={60} height={28} style={{ marginTop: 8 }} />
        <Skeleton width={'100%'} height={6} borderRadius={3} style={{ marginTop: 8 }} />
      </div>

      <div className={'details__row'}>
        <div className={'card detail-card'}>
          <Skeleton width={60} height={14} />
          <Skeleton width={50} height={28} style={{ marginTop: 8 }} />
        </div>
        <div className={'card detail-card'}>
          <Skeleton width={80} height={14} />
          <Skeleton width={40} height={28} style={{ marginTop: 8 }} />
        </div>
      </div>

      <div className={'card forecast'}>
        <Skeleton width={70} height={12} />
        <Skeleton width={160} height={24} style={{ marginTop: 8 }} />
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} style={{ padding: '16px 0', borderBottom: index === 0 ? '1px solid #f0f0f0' : 'none' }}>
            <Skeleton width={80} height={14} />
            <Skeleton width={120} height={12} style={{ marginTop: 4 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
              <Skeleton width={32} height={32} borderRadius={16} />
              <div style={{ flex: 1 }} />
              <Skeleton width={80} height={28} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeSkeleton;
