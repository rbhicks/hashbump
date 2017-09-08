import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const Conn = new Sequelize(
  'hashbump',
  'postgres',
  '<replace with password, old one is still in github history',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

const Hashtag = Conn.define('hashtag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  yayCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  grrrCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  dunnoCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  mehCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  }
});


// Conn.sync({ force: true }).then(()=> {
//   _.times(1000, ()=> {
//     return Hashtag.create({
//       name: `${Faker.commerce.productName()}`.replace(/ /g, "").toLowerCase(),
//       yayCount: 0,
//       grrrCount: 0,
//       dunnoCount: 0,
//       mehCount: 0
//     })
//   });
// });

export default Conn;
