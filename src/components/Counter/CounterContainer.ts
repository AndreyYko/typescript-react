import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Types from 'Ty'

import { increase, decrease } from '../../store/actions/counter';

import Counter from './Counter';

const mapStateToProps = ({ counter }: any) => ({
  current: counter.current
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ increase, decrease }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
