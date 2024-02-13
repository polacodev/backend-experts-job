import { connect } from 'mqtt';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';

const client = connect('mqtt://test.mosquitto.org', {
  reconnectPeriod: 1000,
});

const pubsub = new MQTTPubSub({
  client,
});
export default pubsub;
// import { PubSub } from 'apollo-server';

// const pubsub = new PubSub();

// export default pubsub;
