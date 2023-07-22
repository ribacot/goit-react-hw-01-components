import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './profile/Profile';
import Section from './section/Section';
import StatisticsItems from './statistics/Statistics-items';
import List from 'components/list/List';
import FriendListItem from 'components/friendListItem/FriendListItem';
import TransactionTable from 'components/transaction-table/TransactionTable';
import TransactoinTableItems from 'components/transaction-table-items/TransactoinTableItems';

// console.log(sectionCss)
export const App = () => {
  return (
    <>
      <Section title="User card">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats" sectionClass="upload">
        <StatisticsItems data={data} />
      </Section>
      <Section sectionClass="upload">
        <StatisticsItems data={data} />
      </Section>
      <Section title="Friend list">
        <List>
          <FriendListItem data={friends} />
        </List>
      </Section>
      <Section title="Transaction-history">
        <TransactionTable>
          <TransactoinTableItems items={transactions} />
        </TransactionTable>
      </Section>
    </>
  );
};
