import MUIDataTable from 'mui-datatables';

export const TableAxios = () => {
    const columns = [
        {
            name: 'nombre_empleado',
            label: 'Nombre del empleado',
        },
        {
            name: 'apellido_empleado',
            label: 'Apellido del empleado',
        },
        {
            name: 'identidad_empleado',
            label: 'Identidad del empleado',
        },
        {
            name: 'telefono_empleado',
            label: 'Telefono del empleado',
        },
        {
            name: 'correo_empleado',
            label: 'Correo del empleado',
        },
        {
            name: 'direccion_empleado',
            label: 'Direccion del empleado',
        },
        {
            name: 'rol_id',
            label: 'Codigo de Rol del Empleado',
        },
    ];
    //4 - renderizamos la datatable
    return (
        <MUIDataTable
            title={'Tabla de Empleados'}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar Empleado',
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar Empleado',
                },
            ]}
        />
    );
};
