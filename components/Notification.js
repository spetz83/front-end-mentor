import Image from "next/image";

export default function Notification({ notification, styles }) {
  console.log(notification);
  return (
    <div className={styles.notification}>
      <Image src={notification.avatarSrc} height={50} width={50} alt="avatar" />
      <div className={styles.details}>
        <div className={styles.preview}>
          <p>
            <span className={styles.username}>{`${notification.name} `}</span>
            {`${notification.message} `}
            <span className={styles.title}>{notification.title}</span>
          </p>
          {notification.unread && <div className={styles.dot} />}
        </div>
        <span className={styles.timestamp}>{notification.timestamp}</span>
      </div>
    </div>
  );
}
