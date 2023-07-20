import { Profile } from '../profile/Profile';
import { Section } from '../section/Section';
import user from '../../user.json';
import { Statistics } from '../statistics/Statistics-list';
import data from '../../data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Section title="User card" sectionClass="section-user-card">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats" sectionClass="section-statistics">
        <Statistics data={data} />
      </Section>
      <Section>
        <Statistics data={data} />
      </Section>
    </div>
  );
};
