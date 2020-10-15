<template>
    <div class="content has-text-centered">
        <div class="columns">
            <div class="column">
                <UnorderedListLinks titleColor="has-text-white" linkColor="has-text-success" :content="[['Courses', '/courses'], ['Pricing', '/plans'], ['Login', '/login'], ['Join Now', '/join']]" title="Home" size="is-small" />
            </div>
            <div class="column">
                <UnorderedListLinks titleColor="has-text-white" linkColor="has-text-success" :content="[['Jobs', '/jobs'], ['Contact Us', '/contact']]" title="Teachers" size="is-small" />
            </div>
            <div class="column">
                <UnorderedListLinks titleColor="has-text-white" linkColor="has-text-success" :content="[['Contact Us', '/contact']]" title="Partnerships" size="is-small" />
            </div>
            <div class="column">
                <UnorderedListLinks titleColor="has-text-white" linkColor="has-text-success" :content="[['FAQ', '/faq'], ['Support Chat', '/support' ]]" title="Support" size="is-small" />
            </div>
        </div>
        <p>
            <strong style="color: white">Socialites School</strong> by <a class="has-text-success" href="https://socialites.app">Socialites, Inc</a>.
        </p>
    </div>
</template>

<script>
import UnorderedListLinks from "@/components/UnorderedListLinks"
export default {
    components:{ 
        UnorderedListLinks,
    }
}
</script>

<style scoped>

</style>