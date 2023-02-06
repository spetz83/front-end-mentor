import Layout from "@/components/layout";
import styles from "@/styles/Notifications.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function Notification() {
  const data = [
    {
      id: 1,
      avatarSrc: "/images/notifications/avatar-mark-webber.webp",
      name: "Mark Webber",
      message: "reacted to your recent post",
      title: "My first tournament today!",
      pm: null,
      pictureSrc: null,
      unread: true,
      type: "reaction",
      timestamp: "1m ago",
    },
    {
      id: 2,
      avatarSrc: "/images/notifications/avatar-angela-gray.webp",
      name: "Angela Gray",
      message: "followed you",
      title: "",
      pm: null,
      pictureSrc: null,
      unread: true,
      type: "generic",
      timestamp: "5m ago",
    },
    {
      id: 3,
      avatarSrc: "/images/notifications/avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
      message: "has joined the group",
      title: "Chess Club",
      pm: null,
      pictureSrc: null,
      unread: true,
      type: "group",
      timestamp: "1 day ago",
    },
    {
      id: 4,
      avatarSrc: "/images/notifications/avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
      message: "reacted to your recent post",
      title: "My first tournament today!",
      pm: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      pictureSrc: null,
      unread: false,
      type: "reaction",
      timestamp: "1m ago",
    },
    {
      id: 5,
      avatarSrc: "/images/notifications/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
      message: "commented on your picture",
      title: "",
      pm: null,
      pictureSrc: "/images/notifications/image-chess.webp",
      unread: false,
      type: "picture",
      timestamp: "1 week ago",
    },
    {
      id: 6,
      avatarSrc: "/images/notifications/avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
      message: "reacted to your recent post",
      title: "5 end-game strategies to increase your win rate",
      pm: null,
      pictureSrc: null,
      unread: false,
      type: "reaction",
      timestamp: "2 weeks ago",
    },
    {
      id: 7,
      avatarSrc: "/images/notifications/avatar-anna-kim.webp",
      name: "Anna Kim",
      message: "left the group",
      title: "Chess Club",
      pm: null,
      pictureSrc: null,
      unread: false,
      type: "group",
      timestamp: "2 weeks ago",
    },
  ];

  const [notifications, setNotifications] = useState(data);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const numUnread = notifications.reduce((acc, current) => {
      if (current.unread) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setUnreadCount(numUnread);
  }, [notifications]);

  const handleNotificationClick = id => {
    const notes = [...notifications];
    notes.forEach(note => {
      if (note.id === id) {
        note.unread = false;
      }
    });
    setNotifications(notes);
  };

  const handleMarkAllRead = () => {
    const notes = [...notifications];
    notes.forEach(note => {
      note.unread = false;
    });
    setNotifications(notes);
  };

  return (
    <Layout>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.countContainer}>
            <h1>Notifications</h1>
            <div className={styles.pill}>{unreadCount}</div>
          </div>
          <button
            className={styles.notificationBtn}
            onClick={handleMarkAllRead}
          >
            Mark all as read
          </button>
        </div>
        <div className={styles.notificationContainer}>
          {notifications.map(notification => {
            return (
              <div
                key={notification.id}
                className={styles.notification}
                onClick={() => {
                  handleNotificationClick(notification.id);
                }}
              >
                <Image
                  src={notification.avatarSrc}
                  height={50}
                  width={50}
                  alt="avatar"
                />
                <div className={styles.details}>
                  <div className={styles.preview}>
                    <p>
                      <span className={styles.username}>
                        {`${notification.name} `}
                      </span>
                      {`${notification.message} `}
                      <span className={styles.title}>{notification.title}</span>
                    </p>
                    {notification.unread && <div className={styles.dot} />}
                  </div>
                  <span className={styles.timestamp}>
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
