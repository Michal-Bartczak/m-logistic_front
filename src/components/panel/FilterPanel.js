import React from 'react';

const FilterPanel = ({ filters, onFilterChange, onApplyFilter }) => {
    return (
        <div className="filter-container bg-secondary">
            <div className="row">
                <div className="col-3">
                    <input
                        type="text"
                        name="orderNumber"
                        placeholder="Wpisz numer zamówienia"
                        value={filters.orderNumber}
                        onChange={onFilterChange}
                    />
                </div>
                <div className="col-3">
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={onFilterChange}
                    />
                </div>
                <div className="col-3">
                    <select name="status" value={filters.status} onChange={onFilterChange}>
                        <option value="">WSZYSTKIE</option>
                        <option value="MAGAZYN">MAGAZYN</option>
                        <option value="DOSTAWA">DOSTAWA</option>
                        <option value="DOSTARCZONO">DOSTARCZONO</option>
                    </select>
                </div>
                <div className="col-3">
                    <label>
                        <input
                            type="checkbox"
                            name="kind"
                            value="EUR"
                            checked={filters.kind.includes('EUR')}
                            onChange={onFilterChange}
                        /> EUR
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="kind"
                            value="HP"
                            checked={filters.kind.includes('HP')}
                            onChange={onFilterChange}
                        /> HP
                    </label>
                </div>
                <div className="col-12 text-center mt-2">
                    <button className="btn btn-primary" onClick={onApplyFilter}>Zastosuj Filtry</button>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;
