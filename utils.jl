using BibTeX

function hfun_bar(vname)
  val = Meta.parse(vname[1])
  return round(sqrt(val), digits=2)
end

function hfun_m1fill(vname)
  var = vname[1]
  return pagevar("index", var)
end

function lx_baz(com, _)
  # keep this first line
  brace_content = Franklin.content(com.braces[1]) # input string
  # do whatever you want here
  return uppercase(brace_content)
end

function hfun_include(vname)

    fname = vname[1]
    try
        return join(readlines(joinpath(@__DIR__, fname)), "\n")
    catch e
        return string(e)
    end
end

function ref_item(ref, infos)
    io = IOBuffer()

    author = infos["author"]

    author_list = split(author, " and ")

    write(io, "<li id=\"#$ref\">")

    for entry in author_list

        splitted = split(entry, ",")

        if length(splitted) == 1
            write(io, "$(splitted[1]), ")
        else
            last, first = strip.(splitted)
            write(io, "$first $last, ")
        end
    end
    
    if haskey(infos, "date")
        date = infos["date"]
    elseif haskey(infos, "year")
        date = infos["year"]
    else
        error("Date for key for $author not defined")
    end

    title = infos["title"]
    title = replace(title, "{"=>"", "}"=>"")

    write(io, """<span style="font-style:italic;">$title</span>, $date.""")
    write(io, "</li>")
    return String(take!(io))
end


function hfun_cite(refs)
    _, allrefs = parse_bibtex(read(joinpath("_assets", "peacefounder.bib"), String))
    out = IOBuffer()
    write(out, "<ul style=\"margin-left:1rem;\">")
    for ref in refs
        infos = get(allrefs, ref, nothing)
        isnothing(infos) && continue
        write(out, ref_item(ref, infos))
    end
    write(out, "</ul>")
    return String(take!(out))
end
