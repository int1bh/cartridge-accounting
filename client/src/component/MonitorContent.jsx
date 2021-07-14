import React from 'react'
import ChartsComponent from './ChartsComponent'
import { connect } from 'react-redux'

function MonitorContent({modelCartridges, filteredWarehouse, filteredIssued, filteredRefuel}) {
    return(
        <ChartsComponent modelCartridges={modelCartridges} filteredWarehouse={filteredWarehouse} filteredIssued={filteredIssued} filteredRefuel={filteredRefuel} />
    )
}


const mapStateToProps = (state) => {
    return {
      modelCartridges: state.modelCartridges.modelCartridges.map(item => item.modelName),
      filteredWarehouse: state.filteredWarehouse.filteredWarehouse,
      filteredIssued: state.filteredIssued.filteredIssued,
      filteredRefuel: state.filteredRefuel.filteredRefuel
    };
  };
  
  export default connect(mapStateToProps)(MonitorContent);