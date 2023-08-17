import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr style={{ width: '100%', borderColor: '#7b7a8e' }} />
      <span>
        Copyright © 2023 PO.GG. PO.GG isn’t endorsed by Riot Games and doesn’t
        reflect the views or opinions of Riot Games or anyone officially
        involved in producing or managing Team Fight Tactics. Team Fight Tactics
        and Riot Games are trademarks or registered trademarks of Riot Games,
        Inc. Team Fight Tactics © Riot Games, Inc.
      </span>
    </div>
  );
};

export default Footer;
