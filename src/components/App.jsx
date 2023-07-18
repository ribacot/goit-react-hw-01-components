import { Profile } from './Profile';
import { Section } from './section/Section';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section titel="Upload stats">
        <Statistics data={data} />
      </Section>
      <Section>
        <Statistics data={data} />
      </Section>
    </div>
  );
};
