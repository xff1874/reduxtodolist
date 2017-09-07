import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions"
import Link from "../components/Link"

const mapStatetoProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(mapStatetoProps, mapDispatchToProps)(Link);
export default FilterLink;