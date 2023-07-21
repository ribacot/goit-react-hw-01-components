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

import {  friendCss,
  listCss,
  profileCss,
  sectionCss,
  statlistItemsCss,
  transTableCss,
  transTableItemsCss,
} from './App_import_css'

// console.log(sectionCss)
export const App = () => {
  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      //   fontSize: 25,
      //   color: '#010101',
      // }}
    >
      <Section title="User card" sectionClass={sectionCss.section} >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats" sectionClass="section-statistics">
        <List classList="list-statistics">
          <StatisticsItems data={data} />
        </List>
      </Section>
      <Section sectionClass="section-statistics">
        <List classList="statistics-list">
          <StatisticsItems data={data} />
        </List>
      </Section>
      <Section title="Frend List" sectionClass="section-friends">
        <List classList="friend-list">
          <FriendListItem data={friends} />
        </List>
      </Section>
      <Section title="Transaction-history" sectionClass="section-transaction">
        <TransactionTable classTable="transaction-history">
          <TransactoinTableItems items={transactions} />
        </TransactionTable>
      </Section>
    </div>
  );
};
