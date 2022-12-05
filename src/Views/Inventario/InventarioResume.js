import MUIDataTable from 'mui-datatables';

export const TableAxios = () => {
    //3 - Definimos las columns
    const columns = [
        {
            name: 'producto',
            label: 'Nombre Producto',
        },
        {
            name: 'descripcion',
            label: 'Descripcion Producto',
        },
        {
            name: 'stock',
            label: 'Stock',
        },
        {
            name: 'precio_producto',
            label: 'Precio Producto',
        },
        {
            name: 'proveedor_id',
            label: 'ID Proveedor',
        },
    ];
    //4 - renderizamos la datatable
    return (
        <MUIDataTable
            title={'Inventario de Productos'}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar Artista',
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar Artista',
                },
            ]}
        />
    );
};
