// will create my custom render function here
function customRender(to_render, container)
{
    const my_element = document.createElement(to_render.type)
    my_element.innerHTML = to_render.children

    // now setting properties
    for (const prop in to_render.props)
    {
        my_element.setAttribute(prop, to_render.props[prop])
    }

    container.append(my_element)
}