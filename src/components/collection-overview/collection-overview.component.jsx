import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections, selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...restProps}) => (
                <CollectionPreview key={id} {...restProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview)